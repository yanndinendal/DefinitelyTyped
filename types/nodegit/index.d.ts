// Type definitions for nodegit 0.28
// Project: https://github.com/nodegit/nodegit, http://nodegit.org
// Definitions by: Dolan Miu <https://github.com/dolanmiu>,
//                 Tobias Nießen <https://github.com/tniessen>,
//                 Pierre Vigier <https://github.com/pvigier>
//                 Jibril Saffi <https://github.com/IGI-111>
//                 Benjamin Schuster-Boeckler <https://github.com/DaGaMs>
//                 Julien Chaumond <https://github.com/julien-c>
//                 Jake Murzy <https://github.com/jmurzy>
//                 Niklas Wenzel <https://github.com/nikwen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export { AnnotatedCommit } from "./annotated-commit";
export { Apply } from "./apply";
export { ApplyOptions } from "./apply-options";
export { Attr } from "./attr";
export { Blame } from "./blame";
export { BlameHunk } from "./blame-hunk";
export { BlameOptions } from "./blame-options";
export { Blob } from "./blob";
export { Branch } from "./branch";
export { Buf } from "./buf";
export { Cert } from "./cert";
export { CertHostkey } from "./cert-host-key";
export { CertX509 } from "./cert-x509";
export { Checkout } from "./checkout";
export { CheckoutOptions } from "./checkout-options";
export { Cherrypick } from "./cherry-pick";
export { CherrypickOptions } from "./cherry-pick-options";
export { Clone } from "./clone";
export { CloneOptions } from "./clone-options";
export { Commit } from "./commit";
export { Config } from "./config";
export { ConvenientHunk } from "./convenient-hunk";
export { ConvenientPatch } from "./convenient-patch";
export { Cred } from "./cred";
export { CredUserpassPayload } from "./cred-user-pass-payload";
export { CredUsername } from "./cred-username";
export { Credential } from "./credential";
export { CvarMap } from "./cvar-map";
export { DescribeFormatOptions } from "./describe-format-options";
export { DescribeOptions } from "./describe-options";
export { Diff, DiffFindOptions } from "./diff";
export { DiffBinary } from "./diff-binary";
export { DiffBinaryFile } from "./diff-binary-file";
export { DiffDelta } from "./diff-delta";
export { DiffFile } from "./diff-file";
export { DiffLine } from "./diff-line";
export { DiffOptions } from "./diff-options";
export { DiffPerfdata } from "./diff-perf-data";
export { DiffStats } from "./diff-stats";
export { Enums } from "./enums";
export { Error } from "./error";
export { Fetch } from "./fetch";
export { FetchOptions } from "./fetch-options";
export { Filter } from "./filter";
export { Giterr } from "./git-err";
export { Graph } from "./graph";
export { Hashsig } from "./hash-sig";
export { Ignore } from "./ignore";
export { IndexEntry } from "./index-entry";
export { Index } from "./index_";
export { Indexer } from "./indexer";
export { Libgit2 } from "./lib-git2";
export { Merge } from "./merge";
export { MergeFileInput } from "./merge-file-input";
export { MergeFileOptions } from "./merge-file-options";
export { MergeFileResult } from "./merge-file-result";
export { MergeOptions } from "./merge-options";
export { Note } from "./note";
export { Object } from "./object";
export { Odb } from "./odb";
export { OdbExpandId } from "./odb-expand-id";
export { OdbObject } from "./odb-object";
export { Oid } from "./oid";
export { Oidarray } from "./oid-array";
export { Openssl } from "./open-ssl";
export { Packbuilder } from "./pack-builder";
export { Pathspec } from "./path-spec";
export { Proxy } from "./proxy";
export { ProxyOptions } from "./proxy-options";
export { Push } from "./push";
export { PushOptions } from "./push-options";
export { PushUpdate } from "./push-update";
export { Rebase, RebaseOptions } from "./rebase";
export { RebaseOperation } from "./rebase-operation";
export { Refdb } from "./ref-db";
export { Reflog, ReflogEntry } from "./ref-log";
export { Refspec } from "./ref-spec";
export { Reference } from "./reference";
export { Remote } from "./remote";
export { RemoteCallbacks } from "./remote-callbacks";
export { Repository, RepositoryInitOptions } from "./repository";
export { Reset } from "./reset";
export { Revparse } from "./rev-parse";
export { Revwalk } from "./rev-walk";
export { Revert } from "./revert";
export { Signature } from "./signature";
export { Stash } from "./stash";
export { Status } from "./status";
export { StatusEntry } from "./status-entry";
export { StatusFile } from "./status-file";
export { StatusFileOptions } from "./status-file-options";
export { StatusList } from "./status-list";
export { StatusOptions } from "./status-options";
export { Strarray } from "./str-array";
export { Submodule } from "./submodule";
export { SubmoduleUpdateOptions } from "./submodule-update-options";
export { Tag } from "./tag";
export { Time } from "./time";
export { TransferProgress } from "./transfer-progress";
export { Transport } from "./transport";
export { Tree } from "./tree";
export { Treebuilder } from "./tree-builder";
export { TreeEntry } from "./tree-entry";
export { TreeUpdate } from "./tree-update";
export { Worktree } from "./worktree";
export { WorktreeAddOptions } from "./worktree-add-options";
export { WorktreePruneOptions } from "./worktree-prune-options";
export const version: string;
declare const _: typeof Promise;
export { _ as Promise };
