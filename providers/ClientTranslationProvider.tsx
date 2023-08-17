import {useLocale, NextIntlClientProvider, useMessages} from 'next-intl';

export default function ClientTranslationProvider({children}: {children: React.ReactNode}) {
  const locale = useLocale();
  const messages = useMessages();
  if (!messages) return null;

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={
        messages
      }
    >
      {children}
    </NextIntlClientProvider>
  );
}