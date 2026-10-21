export default function ArrowUpRight({ className }: { className?: string }) {
    return (
        <svg viewBox="0 -3.2 27.2 28.2" fill="none" className={className} aria-hidden>
            {/* Barra horizontal: termina recta en la línea del corte */}
            <path
                d="M0.000279998 5.86555L20.2163 0.106015C21.183 -0.16962 22.228 0.1019 22.9397 0.813615C23.6411 1.51504 23.9147 2.53736 23.6596 3.49591L23.5 4.08L6.10127 9.81083C5.10775 10.1379 4.01139 9.87666 3.27087 9.13615L0.000279998 5.86555Z"
                fill="currentColor"
            />
            {/* Barra diagonal: hueco del grosor de la barra */}
            <path
                d="M18.1572 24.0266L22.21 8.93L16.01 10.97L14.1358 18.0511C13.8828 19.0076 14.1585 20.0237 14.8578 20.7231L18.1572 24.0266Z"
                fill="currentColor"
            />
        </svg>
    );
}