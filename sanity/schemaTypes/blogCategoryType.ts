import {  defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const blogCategoryType = defineType({
    name: "blogCategory",
    title: "Blog Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "description",
            type: "text",
        }),
    ],  
});