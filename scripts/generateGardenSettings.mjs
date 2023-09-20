import dotevnt from "dotenv";
import fs from "fs";
dotevnt.config();
import copyfiles from "copyfiles";

const gardenSettings = {
	githubRepo:
		process.env.GITHUB_REPO || "add your repo to .env as GITHUB_REPO",
	githubToken:
		process.env.GITHUB_TOKEN || "add your token to .env as GITHUB_TOKEN",
	githubUserName:
		process.env.GITHUB_USERNAME ||
		"add your username to .env as GITHUB_USERNAME",
	gardenBaseUrl: "",
	prHistory: [],
	baseTheme: "dark",
	theme: '{"name": "default", "modes": ["dark"]}',
	faviconPath: "",
	noteSettingsIsInitialized: true,
	siteName: "Digital Garden",
	slugifyEnabled: true,
	noteIconKey: "dg-note-icon",
	defaultNoteIcon: "",
	showNoteIconOnTitle: false,
	showNoteIconInFileTree: false,
	showNoteIconOnInternalLink: false,
	showNoteIconOnBackLink: false,
	showCreatedTimestamp: false,
	createdTimestampKey: "dg-created",
	showUpdatedTimestamp: false,
	updatedTimestampKey: "dg-updated",
	timestampFormat: "MMM dd, yyyy h:mm a",
	styleSettingsCss: "",
	pathRewriteRules: "F Folder:",
	customFilters: [
		{
			pattern: "❄️",
			flags: "g",
			replace: "🌞",
		},
	],
	contentClassesKey: "dg-content-classes",
	defaultNoteSettings: {
		dgHomeLink: true,
		dgPassFrontmatter: false,
		dgShowBacklinks: true,
		dgShowLocalGraph: true,
		dgShowInlineTitle: false,
		dgShowFileTree: true,
		dgEnableSearch: false,
		dgShowToc: false,
		dgLinkPreview: false,
		dgShowTags: false,
	},
};

const TEST_VAULT_PATH =
	"src/dg-testVault/.obsidian/plugins/obsidian-digital-garden/";
console.log("Creating test vault data.json");
// write garden settings to test vault
fs.writeFile(
	`${TEST_VAULT_PATH}/data.json`,
	JSON.stringify(gardenSettings, null, 2),
	function (err) {
		if (err) {
			console.log(err);
		}
	},
);

const FILES_TO_COPY = ["main.js", "manifest.json", "styles.css"];
console.log("Copying generated files to test vault");
// copy generated files to test vault
copyfiles([...FILES_TO_COPY, TEST_VAULT_PATH], {}, () => {});
