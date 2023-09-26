interface LinkProps {
    href:string
    children: React.ReactNode
}
import NextLink from 'next/link'

export default function Link({href, children, ...props}: LinkProps) {
    return(
        <NextLink href={href}>
        <a  {...props}>
            {children}
        </a>

        </NextLink>
    )
}