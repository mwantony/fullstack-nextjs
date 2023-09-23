export default function Box({children, styleSheet, tag}) {
    const Tag = tag || 'div'
    return(
        <Tag style={styleSheet}>{children}</Tag>
    )
}