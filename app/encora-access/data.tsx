import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const HERO_STATS = [
    {
        title: "30–60% less staff time",
        subtitle: "spent on basic returns.",
    },
    {
        title: "Shorter lines",
        subtitle: "happier customers, more in-store spend.",
    },
    {
        title: "Verified, traceable returns",
        subtitle: "down to the item and package.",
    },
];

export const HOW_STEPS = [
    {
        icon: <BinIcon />,
        title: "Customer scans",
        body: "QR code, return code, or look up order.",
    },
    {
        icon: <TagsIcon />,
        title: "RetAI verifies",
        body: "Checks order, window, and risk flags.",
    },
    {
        icon: <VerifyIcon />,
        title: "Item is dropped",
        body: "Smart bin logs and unlocks for deposit.",
    },
    {
        icon: <ConnectIcon />,
        title: "Team processes later",
        body: "Staff process returns in batches.",
    },
];

export const WHERE_FITS = [
    {
        title: "Grocery & big-box hubs",
        body: "Offload basic returns while keeping shoppers inside.",
    },
    {
        title: "Marketplace & 3rd-party returns",
        body: "One simple drop-off even for online orders.",
    },
    {
        title: "High-volume apparel / DTC",
        body: "Handle peak returns without seasonal staffing.",
    },
];
