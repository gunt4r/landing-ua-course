export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-gray-800">Ссылка уже использована</h1>
        <p className="text-gray-500 mt-3">
          Каждая ссылка работает только один раз. <br />
          Если ты уже активировал курс — открой Zenedu напрямую. <br />
          Если возникла ошибка — свяжись с поддержкой.
        </p>
      </div>
    </div>
  );
}