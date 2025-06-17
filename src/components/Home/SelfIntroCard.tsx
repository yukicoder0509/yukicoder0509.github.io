export default function SelfIntroCard() {
    return (
        <div className="flex w-full flex-col items-center gap-7 md:flex-row-reverse md:justify-between">
            <img
                src="https://www.gravatar.com/avatar/fbf80edc9ed4b30956a6532006dd8166?s=200&d=identicon"
                alt="Bendoris"
                width="150"
                height="150"
                loading="lazy"
                className="rounded-full"
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
