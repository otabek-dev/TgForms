const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close()
  }

  return {
    tg,
    onClose,
    webAppData: tg.initDataUnsafe,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
    startParam: tg.initDataUnsafe?.start_param
  }
}