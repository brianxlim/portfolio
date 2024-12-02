function Footer() {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <span>
                Coded in
                <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-boldWithLink"
                >
                    &nbsp;Visual Studio Code&nbsp;
                </a>
                by Brian Lim. Built with&nbsp;
                <a
                    href="https://www.react.dev"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-boldWithLink"
                >
                    React
                </a>
                , TypeScript,&nbsp;
                <a
                    href="https://vite.dev"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-boldWithLink"
                >
                    Vite
                </a>
                &nbsp;and&nbsp;
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-boldWithLink"
                >
                    TailwindCSS
                </a>. Deployed with&nbsp;
                <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-boldWithLink"
                >
                    Netlify
                </a>.</span>
        </footer>
    )
}

export default Footer
