var iconClass = `size-5.5 shrink-0 lg:size-5`;
var outlineIconProps = {
	viewBox: `0 0 24 24`,
	fill: `none`,
	stroke: `currentColor`,
	strokeWidth: 1.5,
	strokeLinecap: `round`,
	strokeLinejoin: `round`,
	"aria-hidden": true,
};
var solidIconProps = {
	viewBox: `0 0 24 24`,
	fill: `currentColor`,
	"aria-hidden": true,
};
var ChevronDownIcon = ({ className = `size-4.5 shrink-0` }) => (
	<svg
		aria-hidden={true}
		{...outlineIconProps}
		strokeWidth={1.75}
		className={className}
	>
		<path d="M8 10 11.29 13.29C11.68 13.68 12.32 13.68 12.71 13.29L16 10" />
	</svg>
);
var DownloadIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M20.25 14.75V18.25C20.25 19.35 19.35 20.25 18.25 20.25H5.75C4.65 20.25 3.75 19.35 3.75 18.25V14.75M12 15V3.75M12 15 8.5 11.5M12 15 15.5 11.5" />
	</svg>
);
var ShareIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M7.75 6.25 12 1.75 16.25 6.25" />
		<path d="M12 2.75V13.25" />
		<path d="M7.75 9.75H6.75C5.65 9.75 4.75 10.65 4.75 11.75V18.25C4.75 19.35 5.65 20.25 6.75 20.25H17.25C18.35 20.25 19.25 19.35 19.25 18.25V11.75C19.25 10.65 18.35 9.75 17.25 9.75H16.25" />
	</svg>
);
var CheckIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M4.75 12.78 10 19.25 19.25 4.75" />
	</svg>
);
var FolderIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M4.75 3.75H8.93C9.6 3.75 10.22 4.08 10.59 4.64L11.7 6.3C11.89 6.58 12.2 6.75 12.54 6.75H18.25C19.35 6.75 20.25 7.65 20.25 8.75V10.75H20.66C21.33 10.75 21.81 11.39 21.62 12.03L19.92 17.81C19.67 18.67 18.89 19.25 18 19.25H4.32C3.45 19.25 2.75 18.55 2.75 17.68V5.75C2.75 4.65 3.65 3.75 4.75 3.75Z" />
		<path d="M20.25 10.75H9.5C8.61 10.75 7.83 11.33 7.58 12.19L5.83 18.12C5.63 18.79 5.02 19.25 4.32 19.25" />
	</svg>
);
var FileIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M11.92 2.75H6.75C5.65 2.75 4.75 3.65 4.75 4.75V19.25C4.75 20.35 5.65 21.25 6.75 21.25H17.25C18.35 21.25 19.25 20.35 19.25 19.25V10.08C19.25 9.55 19.04 9.04 18.66 8.66L13.34 3.34C12.96 2.96 12.45 2.75 11.92 2.75Z" />
		<path d="M12.75 3.25V7.25C12.75 8.35 13.65 9.25 14.75 9.25H18.75" />
	</svg>
);
var PrivacyIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...outlineIconProps} className={className}>
		<path d="M9.25 11.5 11 13.25 14.75 9.5M20.25 11.91V6.94C20.25 6.08 19.7 5.32 18.88 5.04L12.63 2.96C12.22 2.82 11.78 2.82 11.37 2.96L5.12 5.04C4.3 5.32 3.75 6.08 3.75 6.94V11.91C3.75 16.88 8 19.25 12 21.41 16 19.25 20.25 16.88 20.25 11.91Z" />
	</svg>
);
var CheckCircleIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...solidIconProps} className={className}>
		<path
			fillRule="evenodd"
			d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM15.58 9.97C15.84 9.65 15.8 9.18 15.47 8.92 15.15 8.66 14.68 8.7 14.42 9.03L10.44 13.88 9.03 12.47C8.74 12.18 8.26 12.18 7.97 12.47 7.68 12.76 7.68 13.24 7.97 13.53L9.97 15.53C10.12 15.68 10.33 15.76 10.54 15.75 10.75 15.74 10.95 15.64 11.08 15.47L15.58 9.97Z"
		/>
	</svg>
);
var WarningIcon = ({ className = iconClass }) => (
	<svg aria-hidden={true} {...solidIconProps} className={className}>
		<path
			fillRule="evenodd"
			d="M12 2C17.52 2 22 6.48 22 12S17.52 22 12 22 2 17.52 2 12 6.48 2 12 2ZM12 15C11.45 15 11 15.45 11 16S11.45 17 12 17 13 16.55 13 16 12.55 15 12 15ZM12 7C11.59 7 11.25 7.34 11.25 7.75V12.25C11.25 12.66 11.59 13 12 13S12.75 12.66 12.75 12.25V7.75C12.75 7.34 12.41 7 12 7Z"
		/>
	</svg>
);
export {
	ChevronDownIcon,
	DownloadIcon,
	ShareIcon,
	CheckIcon,
	FolderIcon,
	FileIcon,
	PrivacyIcon,
	CheckCircleIcon,
	WarningIcon,
};
