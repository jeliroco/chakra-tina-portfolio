// import from chakra
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

export const SimplePopover = (props) => {
  const {
    triggerContent,
    bodyContent,
    trigger,
    placement,
    openDelay,
    ...rest
  } = props;
  return (
    <Popover
      trigger={trigger}
      placement={placement}
      {...rest}
      openDelay={openDelay}
      gutter="2"
    >
      <PopoverTrigger>{triggerContent}</PopoverTrigger>
      <PopoverContent>
        <PopoverBody fontSize="12px" textAlign="center">
          {bodyContent}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
