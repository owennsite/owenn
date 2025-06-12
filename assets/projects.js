import {c as o, r as n, j as e, m as i} from "./index.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l = o("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]])
  , p = () => {
    const [c,s] = n.useState("...");
    return n.useEffect( () => {
        (async () => {
            try {
                const r = (await (await fetch("https://api.cursi.ng/getcount")).json()).user_count
                  , a = Math.floor(r / 5e3) * 5e3;
                s(`${a / 1e3}${r >= a + 5e3 ? "+" : ""}k+`)
            } catch (t) {
                console.error("Failed to fetch user count:", t),
                s("...")
            }
        }
        )()
    }
    , []),
    e.jsxs(i.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0
        },
        className: "space-y-3",
        children: [e.jsx("h2", {
            className: "text-lg font-semibold mb-3",
            children: "projects"
        }), e.jsxs("div", {
            className: "flex items-start gap-3 bg-zinc-900/20 rounded p-3 hover:bg-zinc-900/40 transition-colors",
            children: [e.jsx("img", {
                src: "heist.png",
                alt: "Heist Logo",
                className: "w-8 h-8 rounded"
            }), e.jsxs("div", {
                className: "flex-1",
                children: [e.jsxs("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [e.jsx("h3", {
                            className: "text-sm font-medium",
                            children: "sunshine and rainbows discord bot"
                        }), e.jsxs("span", {
                            className: "text-xs bg-neutral-900 text-neutral-300 px-1.5 py-0.5 rounded-full border border-white/10",
                            children: [c, " users"]
                        })]
                    }), e.jsx("a", {
                        href: "https://www.youtube.com/watch?v=atY7ymXAcRQ",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-white transition-colors",
                        children: e.jsx(l, {
                            size: 14
                        })
                    })]
                }), e.jsx("p", {
                    className: "text-xs text-gray-400",
                    children: "Discord App focused on enhancing your chats."
                }), e.jsxs("div", {
                    className: "flex gap-1 mt-2",
                    children: [e.jsx("span", {
                        className: "text-xs bg-zinc-800/50 text-gray-300 px-1.5 py-0.5 rounded border border-white/5",
                        children: "Javascript"
                    }), e.jsx("span", {
                        className: "text-xs bg-zinc-800/50 text-gray-300 px-1.5 py-0.5 rounded border border-white/5",
                        children: "Python"
                    })]
                })]
            })]
        })]
    })
}
;
export {p as default};
