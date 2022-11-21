import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const CustomLink = ({ href, children, colorScheme, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        color={colorScheme ? `${colorScheme}.500` : null}
        textDecor="underline"
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  );
};
