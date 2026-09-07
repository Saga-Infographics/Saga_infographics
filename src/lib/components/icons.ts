import Play from '@lucide/svelte/icons/play';
import Code from '@lucide/svelte/icons/code';
import Layout from '@lucide/svelte/icons/layout';
import Sparkles from '@lucide/svelte/icons/sparkles';
import FolderGit2 from '@lucide/svelte/icons/folder-git-2';
import Tag from '@lucide/svelte/icons/tag';
import Zap from '@lucide/svelte/icons/zap';
import type { Component } from 'svelte';

type IconComponent = Component<{ class?: string }>;

const ICONS: Record<string, IconComponent> = {
  Play,
  Code,
  Layout,
  Sparkles,
  FolderGit2,
  Tag,
  Zap
};

export function getIcon(name: string): IconComponent {
  return ICONS[name] ?? Zap;
}
