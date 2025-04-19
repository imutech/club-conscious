import { create } from 'zustand';
import i18n from '@/src/utilities/i18n';

interface I18nState {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useI18nStore = create<I18nState>((set) => ({
  locale: i18n.locale, // Initialize with the current i18n locale
  setLocale: (newLocale: string) => {
    i18n.locale = newLocale; // Update the i18n instance
    set({ locale: newLocale }); // Update the store state, triggering re-renders
  },
}));
