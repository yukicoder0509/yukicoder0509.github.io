export default function SelfIntroCard() {
    return (
        <div className="flex w-full flex-col items-center gap-7 md:flex-row-reverse md:justify-between">
            <img
                src="https://www.gravatar.com/avatar/fbf80edc9ed4b30956a6532006dd8166?s=400&d=identicon"
                alt="Bendoris"
                loading="lazy"
                className="size-40 rounded-full md:size-50"
            />
            <div className="font-serif text-xl md:max-w-1/2">
                Self intro Lorem ipsum dolor sit amet consectetur. Dui at in nec
                diam eu. Turpis consectetur aliquet molestie condimentum orci
                posuere nulla id massa. Neque leo aliquam lacus adipiscing id.
                Sed lacinia tortor mattis facilisis eu viverra.
            </div>
        </div>
    );
}
