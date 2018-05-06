#!/usr/bin/env bash

if [ ! -f ./.git/hooks/post-merge ]; then
  cp ./hooks/post-merge ./.git/hooks/post-merge
  chmod +x ./.git/hooks/post-merge
fi

