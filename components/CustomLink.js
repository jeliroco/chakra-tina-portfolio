import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const CustomLink = ({ href, children, rest }) => {
  return (
    <NextLink href={href} passHref>
      <Link textDecor="underline" {...rest}>{children}</Link>
    </NextLink>
  );
};
