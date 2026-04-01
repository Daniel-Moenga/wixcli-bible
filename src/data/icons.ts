import arrowDown from 'lucide-static/icons/arrow-down.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import arrowUpRight from 'lucide-static/icons/arrow-up-right.svg?raw';
import bookOpen from 'lucide-static/icons/book-open.svg?raw';
import messageCircle from 'lucide-static/icons/message-circle.svg?raw';
import clock from 'lucide-static/icons/clock.svg?raw';
import command from 'lucide-static/icons/command.svg?raw';
import monitor from 'lucide-static/icons/monitor.svg?raw';
import layoutGrid from 'lucide-static/icons/layout-grid.svg?raw';
import lifebuoy from 'lucide-static/icons/life-buoy.svg?raw';
import moon from 'lucide-static/icons/moon.svg?raw';
import notebookPen from 'lucide-static/icons/notebook-pen.svg?raw';
import rocket from 'lucide-static/icons/rocket.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import sparkles from 'lucide-static/icons/sparkles.svg?raw';
import star from 'lucide-static/icons/star.svg?raw';
import sun from 'lucide-static/icons/sun.svg?raw';
import terminal from 'lucide-static/icons/terminal.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import code from 'lucide-static/icons/code.svg?raw';
import layers from 'lucide-static/icons/layers.svg?raw';
import zap from 'lucide-static/icons/zap.svg?raw';
import checkCircle from 'lucide-static/icons/check-circle.svg?raw';
import alertTriangle from 'lucide-static/icons/alert-triangle.svg?raw';
import folderTree from 'lucide-static/icons/folder-tree.svg?raw';
import gitBranch from 'lucide-static/icons/git-branch.svg?raw';
import copy from 'lucide-static/icons/copy.svg?raw';
import externalLink from 'lucide-static/icons/external-link.svg?raw';
import search from 'lucide-static/icons/search.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';
import chevronRight from 'lucide-static/icons/chevron-right.svg?raw';
import chevronDown from 'lucide-static/icons/chevron-down.svg?raw';
import fileCode from 'lucide-static/icons/file-code.svg?raw';
import database from 'lucide-static/icons/database.svg?raw';
import lock from 'lucide-static/icons/lock.svg?raw';
import key from 'lucide-static/icons/key.svg?raw';
import server from 'lucide-static/icons/server.svg?raw';
import globe from 'lucide-static/icons/globe.svg?raw';
import puzzle from 'lucide-static/icons/puzzle.svg?raw';
import workflow from 'lucide-static/icons/workflow.svg?raw';

const githubLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`;

export const icons = {
	arrowDown,
	arrowRight,
	arrowUpRight,
	bookOpen,
	messageCircle,
	clock,
	command,
	monitor,
	githubLogo,
	layoutGrid,
	lifebuoy,
	moon,
	notebookPen,
	rocket,
	shieldCheck,
	sparkles,
	star,
	sun,
	terminal,
	users,
	code,
	layers,
	zap,
	checkCircle,
	alertTriangle,
	folderTree,
	gitBranch,
	copy,
	externalLink,
	search,
	menu,
	x,
	chevronRight,
	chevronDown,
	fileCode,
	database,
	lock,
	key,
	server,
	globe,
	puzzle,
	workflow,
} as const;

export type IconName = keyof typeof icons;
