import React from "react";
import { TooltipWrapper, TooltipText } from "./elements";

export const Tooltip = ({ children, header, disabled, ...props }) => (
  <>
    {!disabled ? (
      <TooltipWrapper header={<TooltipText>{header}</TooltipText>} {...props}>
        {children}
      </TooltipWrapper>
    ) : (
      <>{children}</>
    )}
  </>
);
