type MantineDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface MantineDemoControlProps {
  type: MantineDemoControlType;
  name: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface MantineDemoBase {
  component?: React.FC;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface MantineCodeDemo extends MantineDemoBase {
  type: 'demo';
  demoProps?: {
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface MantineConfiguratorDemo extends MantineDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: MantineDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type MantineDemo = MantineCodeDemo | MantineConfiguratorDemo;
