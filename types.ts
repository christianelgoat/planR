
import React from 'react';

export interface ResourceItem {
  text: string;
  subtext?: string;
  details: string;
}

export interface ResourceCategory {
  title: string;
  items: ResourceItem[];
  icon: React.ReactNode;
}

export interface Phase {
  number: number;
  title: string;
  description: string;
  categories: ResourceCategory[];
}
