import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import MuiLinkBase, { LinkProps as MuiLinkBaseProps } from "@mui/material/Link";

type MuiLinkProps = MuiLinkBaseProps & RouterLinkProps;

const MuiLink = React.forwardRef<HTMLAnchorElement, MuiLinkProps>(
  (props, ref) => <MuiLinkBase component={RouterLink} ref={ref} {...props} />
);

export default MuiLink;
