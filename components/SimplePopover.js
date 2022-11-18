// import from chakra
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

export const SimplePopover = (props) => {
  const { triggerContent, bodyContent, trigger, ...rest } = props;
  return (
    <Popover trigger={trigger} {...rest} openDelay="500" placement="top" gutter="2">
      <PopoverTrigger>{triggerContent}</PopoverTrigger>
      <PopoverContent>
        <PopoverBody fontSize="12px" textAlign="center">
          {bodyContent}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
