function createElement(tag, attrs, children) {
    attrs = attrs || {};
    children = children === undefined ? [] : children;

    const el = document.createElement(tag);

    Object.entries(attrs).forEach(([key, value]) => {
        if (key === "class") {
            el.className = Array.isArray(value) ? value.join(" ") : value;
            return;
        }

        if (value === true) {
            el.setAttribute(key, "");
            return;
        }

        el.setAttribute(key, value);
    });

    const kids = [children]
        .flat(Infinity)
        .filter((child) => child != null && child !== false);

    el.append(...kids);

    return el;
}

const h = createElement;

function Header() {
    return h("header", {}, [
        h("div", { class: "header__inner container" }, [
            h("div", { class: "header__socials" }, [
                h("a", { href: "#", class: "header__social-link" }, [
                    h("img", {
                        src: "assets/images/icons/facebook.svg",
                        alt: "Facebook",
                    }),
                ]),
                h("a", { href: "#", class: "header__social-link" }, [
                    h("img", {
                        src: "assets/images/icons/twitter.svg",
                        alt: "Twitter",
                    }),
                ]),
            ]),
            h("a", { href: "#", class: "header__logo" }, "MITRAVEL"),
            h(
                "button",
                {
                    type: "button",
                    class: "header__burger",
                    "aria-label": "Open menu",
                },
                [
                    h("span", { class: "header__burger-line" }),
                    h("span", { class: "header__burger-line" }),
                ],
            ),
        ]),
    ]);
}

function Hero() {
    return h("section", { class: "hero" }, [
        h("img", {
            class: "hero__bg",
            src: "assets/images/motherEarth.png",
            alt: "",
        }),
        h("div", { class: "hero__overlay" }),
        h("div", { class: "hero__inner container" }, [
            h("div", { class: "hero__content" }, [
                h("span", { class: "eyebrow eyebrow--dark" }, "New Book"),
                h("h1", {}, "Mother Earth Hosts Our Travels"),
                h(
                    "p",
                    {},
                    "There are not many cities that have experienced such social and political extremes in recent history as Amsterdam. In the 20th century alone, Amsterdam faced the atrocities of war for the first time in 400 years, became the radical center of 1960s social movements and witnessed a complete",
                ),
            ]),
            h("a", { href: "#", class: "btn btn--coral" }, "Buy The Book"),
        ]),
    ]);
}

function HeroSearch() {
    return h("div", { class: "hero-search container" }, [
        h("div", { class: "hero-search__box" }, [
            h("input", {
                class: "hero-search__field",
                type: "text",
                name: "q",
                placeholder: "Search stories",
            }),
            h("span", {}, [
                h("img", {
                    src: "assets/images/icons/search.svg",
                    alt: "",
                }),
            ]),
        ]),
        h("div", { class: "hero-search__pagination" }, [
            h("div", { class: "hero-search__preview" }, [
                h("img", {
                    src: "/assets/images/heroPreview.png",
                    alt: "Preview of the featured travel video",
                }),
                h("span", { class: "hero-search__play" }, [
                    h("img", {
                        src: "assets/images/icons/play.svg",
                        alt: "",
                    }),
                ]),
            ]),
            h(
                "button",
                {
                    type: "button",
                    class: "hero-search__arrow arrow-btn arrow-btn--prev",
                    "aria-label": "Previous story",
                },
                [
                    h("img", {
                        src: "assets/images/icons/arrow.svg",
                        alt: "Previous story",
                    }),
                ],
            ),
            h("span", { class: "hero-search__label" }, "Wonderful mountain"),
            h(
                "button",
                {
                    type: "button",
                    class: "hero-search__arrow arrow-btn",
                    "aria-label": "Next story",
                },
                [
                    h("img", {
                        src: "assets/images/icons/arrow.svg",
                        alt: "Next story",
                    }),
                ],
            ),
        ]),
    ]);
}

const PRO_CARDS = [1, 2, 3, 4].map((n) => ({
    image: `/assets/images/cards/card-${n}.png`,
    caption: "Vacation Home Rental Success",
}));

function Pro() {
    return h("section", { class: "pro" }, [
        h("div", { class: "container" }, [
            h(
                "h2",
                {
                    class: "pro__heading section-heading section-heading--left",
                },
                "Become A Travel Pro In One Easy Lesson",
            ),
            h(
                "div",
                { class: "pro__gallery" },
                PRO_CARDS.map(({ image, caption }) =>
                    h("div", { class: "pro__card" }, [
                        h("img", { src: image, alt: "", loading: "lazy" }),
                        h("span", { class: "pro__caption" }, caption),
                    ]),
                ),
            ),
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

function Stories() {
    return h("section", { class: "stories" }, [
        h("div", { class: "container" }, [
            h("div", { class: "stories__bg" }, [
                h("img", {
                    src: "/assets/images/featuredStories.png",
                    alt: "Featured Stories",
                    loading: "lazy",
                }),
            ]),
            h("div", { class: "stories__layout" }, [
                h("div", { class: "stories__main" }, [
                    h("div", { class: "stories__intro" }, [
                        h(
                            "span",
                            { class: "eyebrow eyebrow--coral" },
                            "Featured",
                        ),
                        h(
                            "h2",
                            {},
                            "How To Fly A Private Jet On Your Next Trip",
                        ),
                        h(
                            "p",
                            {},
                            "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
                        ),
                    ]),
                    h(
                        "a",
                        { href: "#", class: "stories__cta btn btn--teal" },
                        "Read Article",
                    ),
                ]),
                h("aside", { class: "stories__side" }, [
                    h("h3", {}, "Featured Stories"),
                    h(
                        "div",
                        { class: "stories__posts" },
                        STORY_POSTS.map(({ avatar, title, date }) =>
                            h("div", { class: "stories__post" }, [
                                h("img", {
                                    src: `/assets/images/faces/avatar-${avatar}.svg`,
                                    alt: "",
                                    loading: "lazy",
                                }),
                                h("div", {}, [
                                    h(
                                        "div",
                                        { class: "stories__post-title" },
                                        title,
                                    ),
                                    h(
                                        "div",
                                        { class: "stories__post-date" },
                                        date,
                                    ),
                                ]),
                            ]),
                        ),
                    ),
                ]),
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

function Videos() {
    return h("section", { class: "videos" }, [
        h("div", { class: "container" }, [
            h("div", { class: "videos__intro" }, [
                h("h2", { class: "section-heading" }, "Featured Videos"),
                h(
                    "p",
                    { class: "section-sub" },
                    "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
                ),
            ]),
            h("div", { class: "videos__slider" }, [
                ...VIDEO_SLIDES.map(({ id, checked }) =>
                    h("input", {
                        type: "radio",
                        name: "video",
                        id,
                        checked: !!checked,
                    }),
                ),
                h("div", { class: "videos__track" }, [
                    h(
                        "div",
                        { class: "videos__row" },
                        VIDEO_SLIDES.map(({ id, image, caption }) =>
                            h("label", { class: "videos__slide", for: id }, [
                                h("div", { class: "videos__card" }, [
                                    h("img", {
                                        src: `/assets/images/featuredVideos/card-${image}.png`,
                                        alt: "",
                                        loading: "lazy",
                                    }),
                                    h("span", { class: "videos__caption" }, [
                                        h("img", {
                                            src: "assets/images/icons/videoIcon.svg",
                                            alt: "",
                                        }),
                                        caption,
                                    ]),
                                ]),
                            ]),
                        ),
                    ),
                ]),
                h("div", { class: "videos__nav" }, [
                    h(
                        "button",
                        {
                            type: "button",
                            class: "videos__arrow arrow-btn arrow-btn--prev",
                            "aria-label": "Previous video",
                        },
                        [
                            h("img", {
                                src: "assets/images/icons/arrow.svg",
                                alt: "Arrow left",
                            }),
                        ],
                    ),
                    h(
                        "button",
                        {
                            type: "button",
                            class: "videos__arrow arrow-btn",
                            "aria-label": "Next video",
                        },
                        [
                            h("img", {
                                src: "assets/images/icons/arrow.svg",
                                alt: "Arrow right",
                            }),
                        ],
                    ),
                ]),
            ]),
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

function Newsletter() {
    return h("section", { class: "newsletter" }, [
        h("div", { class: "container" }, [
            h("div", { class: "newsletter__bg newsletter__bg--rounded" }, [
                h("img", {
                    src: "/assets/images/newsletterSection.png",
                    alt: "Background",
                    loading: "lazy",
                }),
            ]),
            h("div", { class: "newsletter__layout" }, [
                h("div", { class: "newsletter__intro" }, [
                    h(
                        "h2",
                        { class: "newsletter__intro-title" },
                        "Sign Up Our Newsletter",
                    ),
                    h(
                        "p",
                        { class: "newsletter__intro-text" },
                        "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent.",
                    ),
                ]),
                h(
                    "div",
                    { class: "newsletter__card newsletter__card--rounded" },
                    [
                        h("form", { class: "newsletter__card--rounded" }, [
                            h(
                                "div",
                                { class: "newsletter__fields" },
                                NEWSLETTER_FIELDS.map(
                                    ({ label, type, id, name, required }) =>
                                        h(
                                            "div",
                                            { class: "newsletter__field" },
                                            [
                                                h("label", { for: id }, label),
                                                h("input", {
                                                    type,
                                                    id,
                                                    name,
                                                    required: !!required,
                                                }),
                                            ],
                                        ),
                                ),
                            ),
                            h(
                                "button",
                                {
                                    type: "submit",
                                    class: "newsletter__submit btn btn--teal",
                                },
                                "Sign Up Now",
                            ),
                        ]),
                    ],
                ),
            ]),
        ]),
    ]);
}

function AvatarStack(avatars, extraClass) {
    extraClass = extraClass || "";

    return h(
        "div",
        { class: `avatar-stack ${extraClass}`.trim() },
        avatars.map((n) =>
            h("img", {
                src: `/assets/images/faces/avatar-${n}.svg`,
                alt: "",
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

    return h("article", { class: cardClass }, [
        h("img", {
            class: "inspirations__card-bg",
            src: image,
            alt: "",
            loading: "lazy",
        }),
        h("div", { class: contentClass }, [
            tag &&
                h(
                    "span",
                    { class: "inspirations__tag eyebrow eyebrow--tag" },
                    tag,
                ),
            playIcon &&
                h("img", {
                    class: "inspirations__play-icon",
                    src: "/assets/images/icons/circlePlay.svg",
                    alt: "",
                }),
            h("div", {}, [
                category &&
                    h("span", { class: "inspirations__category" }, category),
                h("h3", { class: "inspirations__title" }, title),
                AvatarStack(avatars),
            ]),
        ]),
    ]);
}

function QuoteCard() {
    return h(
        "article",
        { class: "inspirations__card inspirations__card--quote" },
        [
            h("img", {
                class: "inspirations__card-bg",
                src: "/assets/images/inspirations/blog-5.png",
                alt: "",
                loading: "lazy",
            }),
            h("div", { class: "inspirations__quote-wrap" }, [
                h("div", { class: "inspirations__quote-inner" }, [
                    h(
                        "cite",
                        { class: "inspirations__quote-cite" },
                        "Andre Gide",
                    ),
                    h(
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

function Inspirations() {
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

    return h("section", { class: "inspirations" }, [
        h("div", { class: "container" }, [
            h("div", { class: "inspirations__intro" }, [
                h("h2", { class: "section-heading" }, "Inspirations"),
                h(
                    "p",
                    { class: "section-sub" },
                    "The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.",
                ),
            ]),
            h("div", { class: "inspirations__grid" }, cards),
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

function FooterColumn({ title, links }) {
    return h("div", { class: "footer__col" }, [
        h("h4", {}, title),
        h("div", { class: "footer__divider" }),
        h(
            "ul",
            { class: "footer__list" },
            links.map((label) =>
                h("li", {}, [
                    h("a", { class: "footer__link", href: "#" }, label),
                ]),
            ),
        ),
    ]);
}

function SubscribeColumn() {
    return h("div", { class: "footer__col footer__col--subscribe" }, [
        h("h4", {}, "Subscribe Now"),
        h("div", { class: "footer__divider" }),
        h("form", { class: "footer__form" }, [
            h("div", { class: "footer__email-input" }, [
                h("input", {
                    type: "email",
                    class: "footer__email-field",
                    placeholder: "Your email",
                    "aria-label": "Ваш email",
                    required: true,
                }),
                h("img", {
                    class: "footer__email-icon",
                    src: "/assets/images/icons/user.svg",
                    alt: "",
                }),
            ]),
            h(
                "button",
                {
                    type: "submit",
                    class: "footer__subscribe-submit btn btn--teal",
                },
                "Subscribe Now",
            ),
        ]),
    ]);
}

function Footer() {
    return h("footer", {}, [
        h("div", { class: "container" }, [
            h("div", { class: "footer__widgets" }, [
                ...FOOTER_LINK_COLUMNS.map(FooterColumn),
                SubscribeColumn(),
            ]),
        ]),
        h("hr"),
        h("div", { class: "container" }, [
            h("div", { class: "footer__bottom" }, [
                h(
                    "span",
                    {},
                    "© 2019 Mass Impressions. Designed by Tran Mau Tri Tam for Mass Impressions. All rights reserved.",
                ),
                h("nav", { class: "footer__nav" }, [
                    h("a", { href: "#" }, "Terms of Service"),
                    h("a", { href: "#" }, "Privacy Policy"),
                ]),
            ]),
        ]),
    ]);
}

const main = h("main", {}, [
    Hero(),
    HeroSearch(),
    Pro(),
    Stories(),
    Videos(),
    Newsletter(),
    Inspirations(),
    Footer(),
]);

document.body.append(Header(), main);
