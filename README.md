# Workshop Blueprint

---

![](https://img.shields.io/github/commit-activity/m/ik-workshop/renovate-issue-blueprint)
![](https://img.shields.io/github/last-commit/ik-workshop/renovate-issue-blueprint)
[![](https://img.shields.io/github/license/ivankatliarchuk/.github)](https://github.com/ivankatliarchuk/.github/LICENCE)
[![](https://img.shields.io/github/languages/code-size/ik-workshop/renovate-issue-blueprint)](https://github.com/ik-workshop/renovate-issue-blueprint)
[![](https://img.shields.io/github/repo-size/ik-workshop/renovate-issue-blueprint)](https://github.com/ik-workshop/renovate-issue-blueprint)
![](https://img.shields.io/github/languages/top/ik-workshop/renovate-issue-blueprint?color=green&logo=markdown&logoColor=blue)

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Renovate Docs](#renovate-docs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Create

[**Create a repository using this template →**][template.generate]

## Resources

### Renovate Docs

- [Example Exercises](./examples)
- [Useful info](./docs/Notes.md)
- [Configuration Options](https://docs.renovatebot.com/configuration-options/)

### Renovate similar Issues

- [Issue-19241](https://github.com/renovatebot/renovate/issues/19241)
- [Issue-16912](https://github.com/renovatebot/renovate/issues/16912)
- [Issue-11000](https://github.com/helm/helm/issues/11000)
- [Issue-11322 use instance profile](https://github.com/renovatebot/renovate/issues/11322)
- [issue-3800 Renovate fails to get Docker tags from AWS ECR](https://github.com/renovatebot/renovate/issues/3800)
- [issue-6885 ECR repository behind friendly URL throws errors](https://github.com/renovatebot/renovate/issues/6885)

### Supporting Docs

- [Renovate manager](https://docs.renovatebot.com/modules/manager/)
- [Renovate home sources](https://github.com/renovatebot/renovate/blob/main/lib/modules/manager/helmv3/artifacts.ts#L36)
- [ECR content discovery](https://github.com/opencontainers/distribution-spec/blob/main/spec.md#content-discovery)
- [Public ECR gallery](https://gallery.ecr.aws/)
- [Renovate connect to AWS ECR registry](https://docs.renovatebot.com/docker/#aws-ecr-amazon-web-services-elastic-container-registry)
- [Authenticate to AWS REgistry](https://docs.aws.amazon.com/eks/latest/userguide/copy-image-to-repository.html)
- [Amazon Container Image Registries](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-images.html)
- [AWS CLI public registries](https://docs.aws.amazon.com/cli/latest/reference/ecr-public/index.html)

### Helm Commands

```sh
$ helm search repo oci://public.ecr.aws/aws-ec2/helm/aws-node-termination-handler --versions
> not found
$ curl -k https://public.ecr.aws/token/ | jq -r '.token'
> AWS ECR public token
$ TOKEN=$(curl -k https://public.ecr.aws/token/ | jq -r '.token')
$ curl -k -H "Authorization: Bearer $TOKEN" https://public.ecr.aws/v2/amazonlinux/amazonlinux/tags/list | jq . | head
> {
  "name": "amazonlinux/amazonlinux",
  "tags": [
    "2.0.20211201.0",
    "2.0.20220218.0-amd64",
    "2018.03.0.20201028.0",
    "2022",
    "2022.0.20230118.3",
    "2023.0.20230308.0",
    "2018.03.0.20220310.0",
}
$ curl -k -H "Authorization: Bearer $TOKEN" https://public.ecr.aws/v2/aws-ec2/helm/aws-node-termination-handler/tags/list | jq . | head
> {
  "name": "aws-ec2/helm/aws-node-termination-handler",
  "tags": [
    "0.22.0"
  ]
}
$ aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 602401143452.dkr.ecr.eu-west-1.amazonaws.com
> Login Succeeded
```

---

<!-- resources -->
[template.generate]: https://github.com/ik-workshop/renovate-issue-blueprint/generate
[code-style.badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
