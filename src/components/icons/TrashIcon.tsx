import { createIcon } from "@chakra-ui/react";

const TrashIcon = createIcon({
  displayName: "TrashIcon",
  viewBox: "0 0 16 17",
  path: (
    <>
      <path
        fill="transparent"
        stroke="#262626"
        d="M12.333 4.833v8.334c0 .733-.6 1.333-1.333 1.333H4.993a1.339 1.339 0 01-1.333-1.34V4.82"
      />
      <path
        fill="transparent"
        stroke="#262626"
        d="M5.667 4.833V3.5a.999.999 0 01.993-1.007h2.667-.007a.999.999 0 011 1v1.334M13.333 4.833H2.667"
      />
    </>
  ),
});

export default TrashIcon;