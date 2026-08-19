function createElement(tag, attrs = {}, children = []) {

    const el = document.createElement(tag);

    Object.entries(attrs).forEach(([key, value]) => {
        if (key === "class") {
            el.className = value;
            return;
        }

        if (value === true) {
            el.setAttribute(key, "");
            return;
        }

        el.setAttribute(key, value);
    });

    const kids = (Array.isArray(children) ? children : [children]).filter((child) => child != null && child !== false,);

    el.append(...kids);

    return el;
}

function HeaderSocials() {
    return createElement("div", { class: "header__socials" }, [
        createElement("a", { href: "#", class: "header__social-link" }, [
            createElement("img", {
                src: "assets/images/icons/facebook.svg",
                alt: "Facebook",
            }),
        ]),
        createElement("a", { href: "#", class: "header__social-link" }, [
            createElement("img", {
                src: "assets/images/icons/twitter.svg",
                alt: "Twitter",
            }),
        ]),
    ]);
}

function HeaderBurger() {
    return createElement(
        "button",
        {
            type: "button",
            class: "header__burger",
            "aria-label": "Open menu",
        },
        [
            createElement("span", { class: "header__burger-line" }),
            createElement("span", { class: "header__burger-line" }),
        ],
    );
}

function Header() {
    return createElement("header", {}, [
        createElement("div", { class: "header__inner container" }, [
            HeaderSocials(),
            createElement(
                "a",
                { href: "#", class: "header__logo" },
                "MITRAVEL",
            ),
            HeaderBurger(),
        ]),
    ]);
}

function HeroContent() {
    return createElement("div", { class: "hero__content" }, [
        createElement("span", { class: "eyebrow eyebrow--dark" }, "New Book"),
        createElement("h1", {}, "Mother Earth Hosts Our Travels"),
        createElement(
            "p",
            {},
            "There are not many cities that have experienced such social and political extremes in recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of war for the first time in 400 years, became the radical center of 1960s social movements and witnessed a complete",
        ),
    ]);
}

function Hero() {
    return createElement("section", { class: "hero" }, [
        createElement("img", {
            class: "hero__bg",
            src: "assets/images/motherEarth.png",
            alt: "Hero background",
        }),
        createElement("div", { class: "hero__overlay" }),
        createElement("div", { class: "hero__inner container" }, [
            HeroContent(),
            createElement(
                "a",
                { href: "#", class: "btn btn--coral" },
                "Buy The Book",
            ),
        ]),
    ]);
}

function HeroSearchBox() {
    return createElement("div", { class: "hero-search__box" }, [
        createElement("input", {
            class: "hero-search__field",
            type: "text",
            name: "q",
            placeholder: "Search stories",
        }),
        createElement("span", {}, [
            createElement("img", {
                src: "assets/images/icons/search.svg",
                alt: "Search",
            }),
        ]),
    ]);
}

function HeroSearchPreview() {
    return createElement("div", { class: "hero-search__preview" }, [
        createElement("img", {
            src: "/assets/images/heroPreview.png",
            alt: "Preview of the featured travel video",
        }),
        createElement("span", { class: "hero-search__play" }, [
            createElement("img", {
                src: "assets/images/icons/play.svg",
                alt: "Play",
            }),
        ]),
    ]);
}

function HeroSearchArrow({ direction, label }) {
    return createElement(
        "button",
        {
            type: "button",
            class:
                direction === "prev"
                    ? "hero-search__arrow arrow-btn arrow-btn--prev"
                    : "hero-search__arrow arrow-btn",
            "aria-label": label,
        },
        [
            createElement("img", {
                src: "assets/images/icons/arrow.svg",
                alt: label,
            }),
        ],
    );
}

function HeroSearchPagination() {
    return createElement("div", { class: "hero-search__pagination" }, [
        HeroSearchPreview(),
        HeroSearchArrow({ direction: "prev", label: "Previous story" }),
        createElement(
            "span",
            { class: "hero-search__label" },
            "Wonderful mountain",
        ),
        HeroSearchArrow({ direction: "next", label: "Next story" }),
    ]);
}

function HeroSearch() {
    return createElement("div", { class: "hero-search container" }, [
        HeroSearchBox(),
        HeroSearchPagination(),
    ]);
}

const PRO_CARDS = [1, 2, 3, 4].map((n) => ({
    image: `/assets/images/cards/card-${n}.png`,
    caption: "Vacation Home Rental Success",
}));

function ProCard({ image, caption }) {
    return createElement("div", { class: "pro__card" }, [
        createElement("img", { src: image, alt: caption, loading: "lazy" }),
        createElement("span", { class: "pro__caption" }, caption),
    ]);
}

function ProGallery() {
    return createElement(
        "div",
        { class: "pro__gallery" },
        PRO_CARDS.map(ProCard),
    );
}

function Pro() {
    return createElement("section", { class: "pro" }, [
        createElement("div", { class: "container" }, [
            createElement(
                "h2",
                {
                    class: "pro__heading section-heading section-heading--left",
                },
                "Become A Travel Pro In One Easy Lesson",
            ),
            ProGallery(),
        ]),
    ]);
}

const STORY_POSTS = [
    {
        avatar: 1,
        title: "Do A Sporting Stag Do In Birmingham",
        date: "13 Dec 2019",
    },
    {
        avatar: 2,
        title: "From Wetlands To Canals And Dams Amsterdam Is Alive",
        date: "13 Dec 2019",
    },
    {
        avatar: 3,
        title: "Stu Unger Rise And Fall Of A Poker Genius",
        date: "13 Dec 2019",
    },
    {
        avatar: 4,
        title: "New Ideas For A Low Cost Vacation On Water",
        date: "13 Dec 2019",
    },
];

function StoryPost({ avatar, title, date }) {
    return createElement("div", { class: "stories__post" }, [
        createElement("img", {
            src: `/assets/images/faces/avatar-${avatar}.svg`,
            alt: "Avatar",
            loading: "lazy",
        }),
        createElement("div", {}, [
            createElement("div", { class: "stories__post-title" }, title),
            createElement("div", { class: "stories__post-date" }, date),
        ]),
    ]);
}

function StoriesMain() {
    return createElement("div", { class: "stories__main" }, [
        createElement("div", { class: "stories__intro" }, [
            createElement(
                "span",
                { class: "eyebrow eyebrow--coral" },
                "Featured",
            ),
            createElement(
                "h2",
                {},
                "How To Fly A Private Jet On Your Next Trip",
            ),
            createElement(
                "p",
                {},
                "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
            ),
        ]),
        createElement(
            "a",
            { href: "#", class: "stories__cta btn btn--teal" },
            "Read Article",
        ),
    ]);
}

function StoriesSide() {
    return createElement("aside", { class: "stories__side" }, [
        createElement("h3", {}, "Featured Stories"),
        createElement(
            "div",
            { class: "stories__posts" },
            STORY_POSTS.map(StoryPost),
        ),
    ]);
}

function Stories() {
    return createElement("section", { class: "stories" }, [
        createElement("div", { class: "container" }, [
            createElement("div", { class: "stories__bg" }, [
                createElement("img", {
                    src: "/assets/images/featuredStories.png",
                    alt: "Featured Stories",
                    loading: "lazy",
                }),
            ]),
            createElement("div", { class: "stories__layout" }, [
                StoriesMain(),
                StoriesSide(),
            ]),
        ]),
    ]);
}

const VIDEO_SLIDES = [
    {
        id: "video-1",
        image: 1,
        caption: "A Guide To Sea Vacations",
        checked: true,
    },
    {
        id: "video-2",
        image: 2,
        caption: "A Guide To Rocky Mountain Vacations",
    },
    {
        id: "video-3",
        image: 3,
        caption: "A Guide To Desert Vacations",
    },
];

function VideoCard({ image, caption }) {
    return createElement("div", { class: "videos__card" }, [
        createElement("img", {
            src: `/assets/images/featuredVideos/card-${image}.png`,
            alt: "Card background",
            loading: "lazy",
        }),
        createElement("span", { class: "videos__caption" }, [
            createElement("img", {
                src: "assets/images/icons/videoIcon.svg",
                alt: "Video Icon",
            }),
            caption,
        ]),
    ]);
}

function VideosTrack() {
    return createElement("div", { class: "videos__track" }, [
        createElement(
            "div",
            { class: "videos__row" },
            VIDEO_SLIDES.map(({ id, image, caption }) =>
                createElement("label", { class: "videos__slide", for: id }, [
                    VideoCard({ image, caption }),
                ]),
            ),
        ),
    ]);
}

function VideosSlider() {
    return createElement("div", { class: "videos__slider" }, [
        ...VIDEO_SLIDES.map(({ id, checked }) =>
            createElement("input", {
                type: "radio",
                name: "video",
                id,
                checked: !!checked,
            }),
        ),
        VideosTrack(),
    ]);
}

function Videos() {
    return createElement("section", { class: "videos" }, [
        createElement("div", { class: "container" }, [
            createElement("div", { class: "videos__intro" }, [
                createElement(
                    "h2",
                    { class: "section-heading" },
                    "Featured Videos",
                ),
                createElement(
                    "p",
                    { class: "section-sub" },
                    "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
                ),
            ]),
            VideosSlider(),
        ]),
    ]);
}

const NEWSLETTER_FIELDS = [
    {
        label: "Email",
        type: "email",
        id: "email1",
        name: "email1",
        required: true,
    },
    {
        label: "Email",
        type: "email",
        id: "email2",
        name: "email2",
        required: true,
    },
    {
        label: "Phone Number",
        type: "tel",
        id: "phone",
        name: "phone",
    },
];

function NewsletterField({ label, type, id, name, required = false }) {
    return createElement("div", { class: "newsletter__field" }, [
        createElement("label", { for: id }, label),
        createElement("input", {
            type,
            id,
            name,
            required: !!required,
        }),
    ]);
}

function NewsletterCard() {
    return createElement(
        "div",
        { class: "newsletter__card newsletter__card--rounded" },
        [
            createElement("form", { class: "newsletter__card--rounded" }, [
                createElement(
                    "div",
                    { class: "newsletter__fields" },
                    NEWSLETTER_FIELDS.map(NewsletterField),
                ),
                createElement(
                    "button",
                    {
                        type: "submit",
                        class: "newsletter__submit btn btn--teal",
                    },
                    "Sign Up Now",
                ),
            ]),
        ],
    );
}

function Newsletter() {
    return createElement("section", { class: "newsletter" }, [
        createElement("div", { class: "container" }, [
            createElement(
                "div",
                { class: "newsletter__bg newsletter__bg--rounded" },
                [
                    createElement("img", {
                        src: "/assets/images/newsletterSection.png",
                        alt: "Background",
                        loading: "lazy",
                    }),
                ],
            ),
            createElement("div", { class: "newsletter__layout" }, [
                createElement("div", { class: "newsletter__intro" }, [
                    createElement(
                        "h2",
                        { class: "newsletter__intro-title" },
                        "Sign Up Our Newsletter",
                    ),
                    createElement(
                        "p",
                        { class: "newsletter__intro-text" },
                        "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent.",
                    ),
                ]),
                NewsletterCard(),
            ]),
        ]),
    ]);
}

function AvatarStack(avatars, extraClass) {
    extraClass = extraClass || "";

    return createElement(
        "div",
        { class: `avatar-stack ${extraClass}`.trim() },
        avatars.map((n) =>
            createElement("img", {
                src: `/assets/images/faces/avatar-${n}.svg`,
                alt: "Avatar",
            }),
        ),
    );
}

function InspirationCard({
    image,
    wide,
    split,
    tag,
    playIcon,
    category,
    title,
    avatars,
}) {
    const cardClass = ["inspirations__card", wide && "inspirations__card--wide"]
        .filter(Boolean)
        .join(" ");

    const contentClass = [
        "inspirations__content",
        split && "inspirations__content--split",
    ]
        .filter(Boolean)
        .join(" ");

    return createElement("article", { class: cardClass }, [
        createElement("img", {
            class: "inspirations__card-bg",
            src: image,
            alt: "Inspiration card background",
            loading: "lazy",
        }),
        createElement("div", { class: contentClass }, [
            tag &&
                createElement(
                    "span",
                    { class: "inspirations__tag eyebrow eyebrow--tag" },
                    tag,
                ),
            playIcon &&
                createElement("img", {
                    class: "inspirations__play-icon",
                    src: "/assets/images/icons/circlePlay.svg",
                    alt: "Play icon",
                }),
            createElement("div", {}, [
                category &&
                    createElement(
                        "span",
                        { class: "inspirations__category" },
                        category,
                    ),
                createElement("h3", { class: "inspirations__title" }, title),
                AvatarStack(avatars),
            ]),
        ]),
    ]);
}

function QuoteCard() {
    return createElement(
        "article",
        { class: "inspirations__card inspirations__card--quote" },
        [
            createElement("img", {
                class: "inspirations__card-bg",
                src: "/assets/images/inspirations/blog-5.png",
                alt: "Inspiration card background",
                loading: "lazy",
            }),
            createElement("div", { class: "inspirations__quote-wrap" }, [
                createElement("div", { class: "inspirations__quote-inner" }, [
                    createElement(
                        "cite",
                        { class: "inspirations__quote-cite" },
                        "Andre Gide",
                    ),
                    createElement(
                        "blockquote",
                        { class: "inspirations__quote" },
                        "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
                    ),
                ]),
                AvatarStack([2, 3], "inspirations__quote-avatars"),
            ]),
        ],
    );
}

function InspirationsGrid() {
    const cards = [
        InspirationCard({
            image: "/assets/images/inspirations/blog-1.png",
            wide: true,
            split: true,
            tag: "Featured",
            category: "Destinations",
            title: "A Guide To Rocky Mountain Vacations",
            avatars: [1, 2, 3],
        }),
        InspirationCard({
            image: "/assets/images/inspirations/blog-2.png",
            split: true,
            playIcon: true,
            category: "Destinations",
            title: "Traveling To Barcelona",
            avatars: [4, 1],
        }),
        InspirationCard({
            image: "/assets/images/inspirations/blog-3.png",
            category: "Destinations",
            title: "Party Jokes Startling But Unnecessary",
            avatars: [2, 3],
        }),
        InspirationCard({
            image: "/assets/images/inspirations/blog-4.png",
            title: "Maui By Air The Best Way Around The Island",
            avatars: [4, 1],
        }),
        QuoteCard(),
        InspirationCard({
            image: "/assets/images/inspirations/blog-6.png",
            split: true,
            playIcon: true,
            category: "Destinations",
            title: "Traveling To Barcelona",
            avatars: [4, 1],
        }),
        InspirationCard({
            image: "/assets/images/inspirations/blog-7.png",
            wide: true,
            split: true,
            tag: "Featured",
            title: "A Guide To Rocky Mountain Vacations",
            avatars: [2, 3, 4],
        }),
    ];

    return createElement("div", { class: "inspirations__grid" }, cards);
}

function Inspirations() {
    return createElement("section", { class: "inspirations" }, [
        createElement("div", { class: "container" }, [
            createElement("div", { class: "inspirations__intro" }, [
                createElement(
                    "h2",
                    { class: "section-heading" },
                    "Inspirations",
                ),
                createElement(
                    "p",
                    { class: "section-sub" },
                    "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
                ),
            ]),
            InspirationsGrid(),
        ]),
    ]);
}

const FOOTER_LINK_COLUMNS = [
    {
        title: "Company",
        links: [
            "About",
            "Press",
            "Blog",
            "Careers",
            "Security",
            "Driver Centre",
        ],
    },
    {
        title: "Information",
        links: [
            "Our Story",
            "Recipes",
            "Nutrition",
            "Resources",
            "Newsletter",
            "Contact",
        ],
    },
    {
        title: "Information",
        links: [
            "Customer service",
            "Recommend a restaurant",
            "Signup a restaurant",
            "Jobs",
            "Press",
            "Terms of use",
        ],
    },
];

function FooterLink(label) {
    return createElement("li", {}, [
        createElement("a", { class: "footer__link", href: "#" }, label),
    ]);
}

function FooterColumn({ title, links }) {
    return createElement("div", { class: "footer__col" }, [
        createElement("h4", {}, title),
        createElement("div", { class: "footer__divider" }),
        createElement("ul", { class: "footer__list" }, links.map(FooterLink)),
    ]);
}

function FooterForm() {
    return createElement("form", { class: "footer__form" }, [
        createElement("div", { class: "footer__email-input" }, [
            createElement("input", {
                type: "email",
                class: "footer__email-field",
                placeholder: "Your email",
                "aria-label": "Ваш email",
                required: true,
            }),
            createElement("img", {
                class: "footer__email-icon",
                src: "/assets/images/icons/user.svg",
                alt: "User icon",
            }),
        ]),
        createElement(
            "button",
            {
                type: "submit",
                class: "footer__subscribe-submit btn btn--teal",
            },
            "Subscribe Now",
        ),
    ]);
}

function SubscribeColumn() {
    return createElement(
        "div",
        { class: "footer__col footer__col--subscribe" },
        [
            createElement("h4", {}, "Subscribe Now"),
            createElement("div", { class: "footer__divider" }),
            FooterForm(),
        ],
    );
}

function FooterWidgets() {
    return createElement("div", { class: "footer__widgets" }, [
        ...FOOTER_LINK_COLUMNS.map(FooterColumn),
        SubscribeColumn(),
    ]);
}

function FooterBottom() {
    return createElement("div", { class: "footer__bottom" }, [
        createElement(
            "span",
            {},
            "© 2019 Mass Impressions. Designed by Tran Mau Tri Tam for Mass Impressions. All rights reserved.",
        ),
        createElement("nav", { class: "footer__nav" }, [
            createElement("a", { href: "#" }, "Terms of Service"),
            createElement("a", { href: "#" }, "Privacy Policy"),
        ]),
    ]);
}

function Footer() {
    return createElement("footer", {}, [
        createElement("div", { class: "container" }, [FooterWidgets()]),
        createElement("hr"),
        createElement("div", { class: "container" }, [FooterBottom()]),
    ]);
}

const main = createElement("main", {}, [
    Hero(),
    HeroSearch(),
    Pro(),
    Stories(),
    Videos(),
    Newsletter(),
    Inspirations(),
]);

document.addEventListener('DOMContentLoaded', function () {
    document.body.append(Header(), main, Footer());
    console.log('DOM готов!')
});