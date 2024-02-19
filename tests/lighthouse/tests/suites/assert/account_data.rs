use core::panic;

use crate::utils::context::TestContext;
use crate::utils::utils::process_transaction_assert_success;
use crate::utils::{create_test_account, create_user};
use lighthouse::types::{
    AccountDataAssertion, ComparableOperator, DataValueAssertion, EquatableOperator,
};
use rust_sdk::LighthouseProgram;
use solana_program_test::tokio;
use solana_sdk::signer::EncodableKeypair;
use solana_sdk::transaction::Transaction;

///
/// Tests all data types using the `AccountData` assertion.
///
#[tokio::test]
async fn test_borsh_account_data() {
    let context = &mut TestContext::new().await.unwrap();
    let mut program = LighthouseProgram {};
    let user = create_user(context).await.unwrap();

    let test_account = create_test_account(context, &user, false).await.unwrap();

    let mut tx = Transaction::new_with_payer(
        &[
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 8,
                        assertion: DataValueAssertion::U8(1, ComparableOperator::Equal),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 9,
                        assertion: DataValueAssertion::I8(-1, ComparableOperator::Equal),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 10,
                        assertion: DataValueAssertion::U16(
                            (u8::MAX as u16) + 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 12,
                        assertion: DataValueAssertion::I16(
                            (i8::MIN as i16) - 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 14,
                        assertion: DataValueAssertion::U32(
                            (u16::MAX as u32) + 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 18,
                        assertion: DataValueAssertion::I32(
                            (i16::MIN as i32) - 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 22,
                        assertion: DataValueAssertion::U64(
                            (u32::MAX as u64) + 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 30,
                        assertion: DataValueAssertion::I64(
                            (i32::MIN as i64) - 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 38,
                        assertion: DataValueAssertion::U128(
                            (u64::MAX as u128) + 1,
                            ComparableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
            program
                .assert_account_data(
                    &user,
                    test_account.encodable_pubkey(),
                    AccountDataAssertion {
                        offset: 70,
                        assertion: DataValueAssertion::Bytes(
                            vec![u8::MAX; 32],
                            EquatableOperator::Equal,
                        ),
                    },
                    None,
                )
                .ixs
                .first()
                .unwrap()
                .clone(),
        ],
        Some(&user.encodable_pubkey()),
    );
    tx.message.recent_blockhash = context.get_blockhash();

    process_transaction_assert_success(context, tx)
        .await
        .unwrap();

    panic!("ass");
    // process_transaction_assert_success(
    //     context,
    //     program
    //         .create_assert_multi(
    //             &user,
    //             vec![
    //                 Assertion::AccountData(8, DataValueAssertion::U8(1, ComparableOperator::Equal)),
    //                 Assertion::AccountData(
    //                     9,
    //                     DataValueAssertion::I8(-1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     10,
    //                     DataValueAssertion::U16((u8::MAX as u16) + 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     12,
    //                     DataValueAssertion::I16((i8::MIN as i16) - 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     14,
    //                     DataValueAssertion::U32((u16::MAX as u32) + 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     18,
    //                     DataValueAssertion::I32((i16::MIN as i32) - 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     22,
    //                     DataValueAssertion::U64((u32::MAX as u64) + 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     30,
    //                     DataValueAssertion::I64((i32::MIN as i64) - 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     38,
    //                     DataValueAssertion::U128((u64::MAX as u128) + 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     54,
    //                     DataValueAssertion::I128((i64::MIN as i128) - 1, ComparableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     70,
    //                     DataValueAssertion::Bytes(vec![u8::MAX; 32], EquatableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     102,
    //                     DataValueAssertion::Bool(true, EquatableOperator::Equal),
    //                 ),
    //                 Assertion::AccountData(
    //                     103,
    //                     DataValueAssertion::Bool(false, EquatableOperator::Equal),
    //                 ),
    //             ],
    //             vec![test_account.encodable_pubkey()],
    //         )
    //         .to_transaction_and_sign(vec![&user], context.get_blockhash())
    //         .unwrap(),
    // )
    // .await
    // .unwrap();
}
