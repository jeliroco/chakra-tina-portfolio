import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export const CustomLink = ({ href, children, otherProps }) => {
  return (
    <NextLink href={href} passHref>
      <Link {...otherProps}>{children}</Link>
    </NextLink>
  );
};
