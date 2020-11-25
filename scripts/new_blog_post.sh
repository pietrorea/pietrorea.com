#!/bin/bash

echo "Enter blog post name:"
read blog_post_name

cd ../src/content

lower_case_name=`echo ${blog_post_name} | awk '{print tolower($0)}'`
kebab_case_name=`echo ${lower_case_name} | sed 's/ /-/g'`
date_dashes=`date +"%Y-%m-%d"`
date_path=`date +"/%Y/%m/%d"`

file="${date_dashes}-${kebab_case_name}.md"

if [[ -f $file ]];then
    echo "$file already exists."
    exit 1
else
    touch $file
    echo "Creating ${file}"
fi

frontmatter="
---
title: ${blog_post_name}
path: ${date_path}/${kebab_case_name} 
date: ${date_dashes}
author: Pietro Rea
layout: post
status: draft
---
"

echo "$frontmatter"

echo "$frontmatter" >> $file

