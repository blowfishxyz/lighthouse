/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type CreateMemoryAccountInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountLighthouseProgram extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMemoryAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountLighthouseProgram extends string
        ? ReadonlyAccount<TAccountLighthouseProgram>
        : TAccountLighthouseProgram,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountMemoryAccount extends string
        ? WritableAccount<TAccountMemoryAccount>
        : TAccountMemoryAccount,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateMemoryAccountInstructionWithSigners<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountLighthouseProgram extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMemoryAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountLighthouseProgram extends string
        ? ReadonlyAccount<TAccountLighthouseProgram>
        : TAccountLighthouseProgram,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountMemoryAccount extends string
        ? WritableAccount<TAccountMemoryAccount>
        : TAccountMemoryAccount,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateMemoryAccountInstructionData = {
  discriminator: number;
  memoryIndex: number;
  memoryAccountSize: bigint;
};

export type CreateMemoryAccountInstructionDataArgs = {
  memoryIndex: number;
  memoryAccountSize: number | bigint;
};

export function getCreateMemoryAccountInstructionDataEncoder(): Encoder<CreateMemoryAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['memoryIndex', getU8Encoder()],
      ['memoryAccountSize', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  );
}

export function getCreateMemoryAccountInstructionDataDecoder(): Decoder<CreateMemoryAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['memoryIndex', getU8Decoder()],
    ['memoryAccountSize', getU64Decoder()],
  ]);
}

export function getCreateMemoryAccountInstructionDataCodec(): Codec<
  CreateMemoryAccountInstructionDataArgs,
  CreateMemoryAccountInstructionData
> {
  return combineCodec(
    getCreateMemoryAccountInstructionDataEncoder(),
    getCreateMemoryAccountInstructionDataDecoder()
  );
}

export type CreateMemoryAccountInput<
  TAccountLighthouseProgram extends string,
  TAccountPayer extends string,
  TAccountMemoryAccount extends string,
  TAccountSystemProgram extends string
> = {
  /** Lighthouse program */
  lighthouseProgram: Address<TAccountLighthouseProgram>;
  /** Payer account */
  payer: Address<TAccountPayer>;
  /** Memory account */
  memoryAccount: Address<TAccountMemoryAccount>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  memoryIndex: CreateMemoryAccountInstructionDataArgs['memoryIndex'];
  memoryAccountSize: CreateMemoryAccountInstructionDataArgs['memoryAccountSize'];
};

export type CreateMemoryAccountInputWithSigners<
  TAccountLighthouseProgram extends string,
  TAccountPayer extends string,
  TAccountMemoryAccount extends string,
  TAccountSystemProgram extends string
> = {
  /** Lighthouse program */
  lighthouseProgram: Address<TAccountLighthouseProgram>;
  /** Payer account */
  payer: TransactionSigner<TAccountPayer>;
  /** Memory account */
  memoryAccount: Address<TAccountMemoryAccount>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  memoryIndex: CreateMemoryAccountInstructionDataArgs['memoryIndex'];
  memoryAccountSize: CreateMemoryAccountInstructionDataArgs['memoryAccountSize'];
};

export function getCreateMemoryAccountInstruction<
  TAccountLighthouseProgram extends string,
  TAccountPayer extends string,
  TAccountMemoryAccount extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: CreateMemoryAccountInputWithSigners<
    TAccountLighthouseProgram,
    TAccountPayer,
    TAccountMemoryAccount,
    TAccountSystemProgram
  >
): CreateMemoryAccountInstructionWithSigners<
  TProgram,
  TAccountLighthouseProgram,
  TAccountPayer,
  TAccountMemoryAccount,
  TAccountSystemProgram
>;
export function getCreateMemoryAccountInstruction<
  TAccountLighthouseProgram extends string,
  TAccountPayer extends string,
  TAccountMemoryAccount extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: CreateMemoryAccountInput<
    TAccountLighthouseProgram,
    TAccountPayer,
    TAccountMemoryAccount,
    TAccountSystemProgram
  >
): CreateMemoryAccountInstruction<
  TProgram,
  TAccountLighthouseProgram,
  TAccountPayer,
  TAccountMemoryAccount,
  TAccountSystemProgram
>;
export function getCreateMemoryAccountInstruction<
  TAccountLighthouseProgram extends string,
  TAccountPayer extends string,
  TAccountMemoryAccount extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: CreateMemoryAccountInput<
    TAccountLighthouseProgram,
    TAccountPayer,
    TAccountMemoryAccount,
    TAccountSystemProgram
  >
): IInstruction {
  // Program address.
  const programAddress =
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateMemoryAccountInstructionRaw<
      TProgram,
      TAccountLighthouseProgram,
      TAccountPayer,
      TAccountMemoryAccount,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    lighthouseProgram: {
      value: input.lighthouseProgram ?? null,
      isWritable: false,
    },
    payer: { value: input.payer ?? null, isWritable: false },
    memoryAccount: { value: input.memoryAccount ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateMemoryAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateMemoryAccountInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getCreateMemoryAccountInstructionRaw<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountLighthouseProgram extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMemoryAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    lighthouseProgram: TAccountLighthouseProgram extends string
      ? Address<TAccountLighthouseProgram>
      : TAccountLighthouseProgram;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    memoryAccount: TAccountMemoryAccount extends string
      ? Address<TAccountMemoryAccount>
      : TAccountMemoryAccount;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateMemoryAccountInstructionDataArgs,
  programAddress: Address<TProgram> = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.lighthouseProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.payer, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.memoryAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateMemoryAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMemoryAccountInstruction<
    TProgram,
    TAccountLighthouseProgram,
    TAccountPayer,
    TAccountMemoryAccount,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}

export type ParsedCreateMemoryAccountInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Lighthouse program */
    lighthouseProgram: TAccountMetas[0];
    /** Payer account */
    payer: TAccountMetas[1];
    /** Memory account */
    memoryAccount: TAccountMetas[2];
    /** System program */
    systemProgram: TAccountMetas[3];
  };
  data: CreateMemoryAccountInstructionData;
};

export function parseCreateMemoryAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateMemoryAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      lighthouseProgram: getNextAccount(),
      payer: getNextAccount(),
      memoryAccount: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateMemoryAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
