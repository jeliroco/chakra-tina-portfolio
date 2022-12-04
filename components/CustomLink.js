import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const CustomLink = ({
  href,
  children,
  isExternal,
  colorScheme,
  ...rest
}) => {
  if (!isExternal) {
    return (
      <NextLink href={href} passHref>
        <Link
          color={colorScheme ? `${colorScheme}.500` : null}
          textDecor="underline"
          isExternal={isExternal}
          {...rest}
        >
          {children}
        </Link>
      </NextLink>
    );
  } else {
    return (
      <Link
        as="a"
        href={href}
        color={colorScheme ? `${colorScheme}.500` : null}
        textDecor="underline"
        isExternal={isExternal}
        {...rest}
      >
        {children}
      </Link>
    );
  }
};
