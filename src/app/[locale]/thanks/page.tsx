import Header     from "@/components/layout/Header";
import Footer     from "@/components/layout/Footer";
import ThankYou from "@/components/sections/ThankYou";
import MetaPixel from "@/components/sections/MetaPixel";

export const metadata = {
  title: "Дякуємо за покупку — AImodelsacademy",
  description: "Ти зробив правильний вибір. Твій доступ до курсу вже активований.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
        <MetaPixel />
      <Header />

      <main>
        <ThankYou />
      </main>

      <Footer />
    </>
  );
}
