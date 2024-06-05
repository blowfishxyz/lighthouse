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
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  LogLevel,
  LogLevelArgs,
  StakeAccountAssertion,
  StakeAccountAssertionArgs,
  getLogLevelSerializer,
  getStakeAccountAssertionSerializer,
} from '../types';

// Accounts.
export type AssertStakeAccountInstructionAccounts = {
  /** Target account to be asserted */
  targetAccount: PublicKey | Pda;
};

// Data.
export type AssertStakeAccountInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: StakeAccountAssertion;
};

export type AssertStakeAccountInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: StakeAccountAssertionArgs;
};

export function getAssertStakeAccountInstructionDataSerializer(): Serializer<
  AssertStakeAccountInstructionDataArgs,
  AssertStakeAccountInstructionData
> {
  return mapSerializer<
    AssertStakeAccountInstructionDataArgs,
    any,
    AssertStakeAccountInstructionData
  >(
    struct<AssertStakeAccountInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['assertion', getStakeAccountAssertionSerializer()],
      ],
      { description: 'AssertStakeAccountInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 11,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertStakeAccountInstructionDataArgs,
    AssertStakeAccountInstructionData
  >;
}

// Args.
export type AssertStakeAccountInstructionArgs =
  AssertStakeAccountInstructionDataArgs;

// Instruction.
export function assertStakeAccount(
  context: Pick<Context, 'programs'>,
  input: AssertStakeAccountInstructionAccounts &
    AssertStakeAccountInstructionArgs
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
  const resolvedArgs: AssertStakeAccountInstructionArgs = { ...input };

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
  const data = getAssertStakeAccountInstructionDataSerializer().serialize(
    resolvedArgs as AssertStakeAccountInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
