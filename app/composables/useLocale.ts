import en from "~/i18n/en";
import ar from "~/i18n/ar";

export type Locale = "en" | "ar";

const translations = { en, ar } as const;

export function useLocale() {
  const localeCookie = useCookie<Locale>("proficio-locale", {
    default: () => "en",
    sameSite: "lax",
  });

  const locale = useState<Locale>("locale", () => localeCookie.value ?? "en");

  watch(
    localeCookie,
    (value) => {
      if (value === "en" || value === "ar") {
        locale.value = value;
      }
    },
    { immediate: true },
  );

  watch(
    locale,
    (value) => {
      localeCookie.value = value;

      if (!import.meta.client) return;

      document.documentElement.lang = value;
      document.documentElement.dir = value === "ar" ? "rtl" : "ltr";
    },
    { immediate: true },
  );

  const isArabic = computed(() => locale.value === "ar");
  const isEnglish = computed(() => locale.value === "en");

  const t = <T extends keyof typeof en>(key: T) => {
    return translations[locale.value][key] ?? key;
  };

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  return {
    locale,
    isArabic,
    isEnglish,
    setLocale,
    t,
  };
}
