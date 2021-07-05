#!/bin/bash

eternalvoidnet_commit_push() {
  msg="$@"

  git add .; \
  git commit -m "$msg" && \
  git push -u all master
}

eternalvoidnet_commit_push "$@"
