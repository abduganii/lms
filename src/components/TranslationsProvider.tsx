'use client';

import { I18nextProvider } from 'react-i18next';
import { ReactNode, useEffect } from 'react';
import initTranslations from '@/app/i18n';
import { Resource, createInstance } from 'i18next';
import Script from 'next/script';
import CustomModal from './ui/CustomModal';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>
    {children}

    <CustomModal/>
    <Script
        src="//code.jivo.ru/widget/AF5OqMmpcX"
        strategy="afterInteractive"
      />
    </I18nextProvider>;
}