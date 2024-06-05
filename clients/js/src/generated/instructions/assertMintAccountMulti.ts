/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  MintAccountAssertions,
  MintAccountAssertionsArgs,
  getMintAccountAssertionsSerializer,
} from '../../hooked';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { LogLevel, LogLevelArgs, getLogLevelSerializer } from '../types';

// Accounts.
export type AssertMintAccountMultiInstructionAccounts = {
  /** Target account to be asserted */
  targetAccount: PublicKey | Pda;
};

// Data.
export type AssertMintAccountMultiInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertions: MintAccountAssertions;
};

export type AssertMintAccountMultiInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertions: MintAccountAssertionsArgs;
};

export function getAssertMintAccountMultiInstructionDataSerializer(): Serializer<
  AssertMintAccountMultiInstructionDataArgs,
  AssertMintAccountMultiInstructionData
> {
  return mapSerializer<
    AssertMintAccountMultiInstructionDataArgs,
    any,
    AssertMintAccountMultiInstructionData
  >(
    struct<AssertMintAccountMultiInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['assertions', getMintAccountAssertionsSerializer()],
      ],
      { description: 'AssertMintAccountMultiInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 8,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertMintAccountMultiInstructionDataArgs,
    AssertMintAccountMultiInstructionData
  >;
}

// Args.
export type AssertMintAccountMultiInstructionArgs =
  AssertMintAccountMultiInstructionDataArgs;

// Instruction.
export function assertMintAccountMulti(
  context: Pick<Context, 'programs'>,
  input: AssertMintAccountMultiInstructionAccounts &
    AssertMintAccountMultiInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95'
  );

  // Accounts.
  const resolvedAccounts = {
    targetAccount: {
      index: 0,
      isWritable: false as boolean,
      value: input.targetAccount ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: AssertMintAccountMultiInstructionArgs = { ...input };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getAssertMintAccountMultiInstructionDataSerializer().serialize(
    resolvedArgs as AssertMintAccountMultiInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
