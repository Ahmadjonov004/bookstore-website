import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordionn() {
  return (
    <div className="container max-w-[1200px] px-[10px] mx-auto my-0">
      <div className="text-[35px] font-medium mb-[15px]">Faq</div>
      <Accordion type="single" collapsible className="w-full max-w-[600px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>📚 Qanday kitoblar mavjud?</AccordionTrigger>
          <AccordionContent>
            Badiiy adabiyot, biznes, shaxsiy rivojlanish, bolalar kitoblari va
            boshqa ko‘plab janrlardagi kitoblar siz uchun tayyor!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            🚚 Yetkazib berish qanday ishlaydi?
          </AccordionTrigger>
          <AccordionContent>
            O‘zbekiston bo‘ylab 1-3 ish kuni ichida tezkor yetkazib beramiz.
            Buyurtmangizni kur'er orqali yoki pochta orqali olishingiz mumkin.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>💳 Qanday to‘lov usullari mavjud?</AccordionTrigger>
          <AccordionContent>
            Click, Payme, Uzcard, Humo va naqd to‘lovni qo‘llab-quvvatlaymiz.
            Online xarid qilish juda qulay!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            🎁 Aksiyalar va chegirmalar bo‘ladimi?
          </AccordionTrigger>
          <AccordionContent>
            Ha, har hafta maxsus aksiyalar, kuponlar va chegirmalar bo‘lib
            turadi. Telegram kanalimizga qo‘shiling!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Accordionn;
