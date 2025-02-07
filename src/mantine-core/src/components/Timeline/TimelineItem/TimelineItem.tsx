import React from 'react';
import { mergeStyles, DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import { Text } from '../../Text/Text';
import useStyles from './TimelineItem.styles';

export type TimelineItemStylesNames = ClassNames<typeof useStyles>;

export interface TimelineItemProps
  extends DefaultProps<TimelineItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Item title, rendered next to bullet */
  title?: React.ReactNode;

  /** React node that should be rendered inside bullet – icon, image, avatar, etc. */
  bullet?: React.ReactNode;

  /** Bullet width, height and border-radius in px, controlled by Timeline component */
  bulletSize?: number;

  /** React node that will be rendered after title */
  children?: React.ReactNode;

  /** Should this item be highlighted, controlled by Timeline component */
  active?: boolean;

  /** Should line of this item be highlighted, controlled by Timeline component */
  lineActive?: boolean;

  /** Highlight color for active item */
  color?: MantineColor;

  /** Line and bullet position relative to item content, controlled by Timeline component */
  align?: 'right' | 'left';

  /** Line border style */
  lineVariant?: 'solid' | 'dashed' | 'dotted';

  /** Line border width in px, controlled by Timeline component */
  lineWidth?: number;
}

export function TimelineItem({
  className,
  style,
  bullet,
  title,
  bulletSize = 20,
  lineWidth = 4,
  active,
  lineActive,
  classNames,
  styles,
  children,
  color,
  align,
  lineVariant = 'solid',
  ...others
}: TimelineItemProps) {
  const { classes, cx } = useStyles(
    { bulletSize, color, align, lineVariant, lineWidth },
    classNames,
    'timeline'
  );
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(
        classes.item,
        { [classes.itemLineActive]: lineActive, [classes.itemActive]: active },
        className
      )}
      style={{
        ...style,
        ..._styles.item,
        ...(lineActive ? _styles.itemLineActive : null),
        ...(active ? _styles.itemActive : null),
      }}
      {...others}
    >
      <div
        className={cx(classes.itemBullet, { [classes.itemBulletWithChild]: bullet })}
        style={{ ..._styles.itemBullet, ...(bullet ? _styles.itemBulletWithChild : null) }}
      >
        {bullet}
      </div>

      <div className={classes.itemBody} style={_styles.itemBody}>
        {title && (
          <Text className={classes.itemTitle} style={_styles.itemTitle}>
            {title}
          </Text>
        )}

        <div className={classes.itemContent} style={_styles.itemContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

TimelineItem.displayName = '@mantine/core/TimelineItem';
