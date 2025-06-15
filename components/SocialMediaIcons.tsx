import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLinks';
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { TooltipContent } from '@radix-ui/react-tooltip';

interface Props { 
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

const SocialMediaIcons = ({className, iconClassName, tooltipClassName}: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center justify-center gap-2", className)}>
        {SocialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.link}
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hoverEffect hover:text-lightGreen hover:scale-105 p-2 border border-white hover:border-lightGreen rounded-full",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "font-semibold text-xs bg-lightGreen p-1 mb-2 rounded-sm text-white",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMediaIcons