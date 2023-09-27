import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";

const StyledButton = styled(Text)<any>`
`

interface ButtonBase {
    children: React.ReactNode
    textVariant: ThemeTypographyVariants
}

export default function ButtonBase({
    textVariant
}) {
    const Tag = 'button'
    return(
        <StyledButton as={Tag}></StyledButton>
    )
}