"use client";

import { useTranslations } from "next-intl";

export default function Date() {
  const t = useTranslations("date");

  return (
    <>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <p>Client Side Translation :</p> &nbsp;
        <h1>{t("day.today")} </h1> &nbsp;
        <h2>{t("day.additional")}</h2>
      </div>
    </>
  );
}
