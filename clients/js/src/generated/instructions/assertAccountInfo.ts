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
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  AccountInfoAssertion,
  AccountInfoAssertionArgs,
  getAccountInfoAssertionDecoder,
  getAccountInfoAssertionEncoder,
} from '../types';

export type AssertAccountInfoInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetAccount extends string
        ? ReadonlyAccount<TAccountTargetAccount>
        : TAccountTargetAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssertAccountInfoInstructionWithSigners<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetAccount extends string
        ? ReadonlyAccount<TAccountTargetAccount>
        : TAccountTargetAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssertAccountInfoInstructionData = {
  discriminator: number;
  accountInfoAssertion: AccountInfoAssertion;
};

export type AssertAccountInfoInstructionDataArgs = {
  accountInfoAssertion: AccountInfoAssertionArgs;
};

export function getAssertAccountInfoInstructionDataEncoder(): Encoder<AssertAccountInfoInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['accountInfoAssertion', getAccountInfoAssertionEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 4 })
  );
}

export function getAssertAccountInfoInstructionDataDecoder(): Decoder<AssertAccountInfoInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['accountInfoAssertion', getAccountInfoAssertionDecoder()],
  ]);
}

export function getAssertAccountInfoInstructionDataCodec(): Codec<
  AssertAccountInfoInstructionDataArgs,
  AssertAccountInfoInstructionData
> {
  return combineCodec(
    getAssertAccountInfoInstructionDataEncoder(),
    getAssertAccountInfoInstructionDataDecoder()
  );
}

export type AssertAccountInfoInput<TAccountTargetAccount extends string> = {
  /** Target account */
  targetAccount: Address<TAccountTargetAccount>;
  accountInfoAssertion: AssertAccountInfoInstructionDataArgs['accountInfoAssertion'];
};

export type AssertAccountInfoInputWithSigners<
  TAccountTargetAccount extends string
> = {
  /** Target account */
  targetAccount: Address<TAccountTargetAccount>;
  accountInfoAssertion: AssertAccountInfoInstructionDataArgs['accountInfoAssertion'];
};

export function getAssertAccountInfoInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertAccountInfoInputWithSigners<TAccountTargetAccount>
): AssertAccountInfoInstructionWithSigners<TProgram, TAccountTargetAccount>;
export function getAssertAccountInfoInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertAccountInfoInput<TAccountTargetAccount>
): AssertAccountInfoInstruction<TProgram, TAccountTargetAccount>;
export function getAssertAccountInfoInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(input: AssertAccountInfoInput<TAccountTargetAccount>): IInstruction {
  // Program address.
  const programAddress =
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getAssertAccountInfoInstructionRaw<TProgram, TAccountTargetAccount>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    targetAccount: { value: input.targetAccount ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getAssertAccountInfoInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as AssertAccountInfoInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getAssertAccountInfoInstructionRaw<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    targetAccount: TAccountTargetAccount extends string
      ? Address<TAccountTargetAccount>
      : TAccountTargetAccount;
  },
  args: AssertAccountInfoInstructionDataArgs,
  programAddress: Address<TProgram> = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.targetAccount, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getAssertAccountInfoInstructionDataEncoder().encode(args),
    programAddress,
  } as AssertAccountInfoInstruction<
    TProgram,
    TAccountTargetAccount,
    TRemainingAccounts
  >;
}

export type ParsedAssertAccountInfoInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target account */
    targetAccount: TAccountMetas[0];
  };
  data: AssertAccountInfoInstructionData;
};

export function parseAssertAccountInfoInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertAccountInfoInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 1) {
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
      targetAccount: getNextAccount(),
    },
    data: getAssertAccountInfoInstructionDataDecoder().decode(instruction.data),
  };
}
