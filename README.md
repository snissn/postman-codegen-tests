in order to use this repo - 

create a file named APIKEY and put your estuary key in it
if you want to run against prod change the HOST variable to the prod api in index.js 

# run run_tests.bash

this will 

1. Generate tests and jstests using your new api key and run against localhost unless you change the HOST variable
2. run each of the curl tests and print out if the test fails and at the end generate summary statistics

if you want to help get this repo so that all tests pass

3. update one of the failed curl tests so that the test passes when you run the curl command
4. update testdata.js and/or index.js so that the curl command thats generate is equivalent to your passing test
5. commit and generate a pr request!


# Current output of script

current output of the script is below. Only the failed tests are listed, ideally we have 100% passing!:


[tests/admin_autoretrieve_init_POST.sh](tests/admin_autoretrieve_init_POST.sh) failed

[tests/admin_peering_peers_DELETE.sh](tests/admin_peering_peers_DELETE.sh) failed

[tests/admin_peering_peers_POST.sh](tests/admin_peering_peers_POST.sh) failed

[tests/admin_peering_start_POST.sh](tests/admin_peering_start_POST.sh) failed

[tests/autoretrieve_heartbeat_POST.sh](tests/autoretrieve_heartbeat_POST.sh) failed

[tests/collections_coluuid_DELETE.sh](tests/collections_coluuid_DELETE.sh) failed

[tests/collections_coluuid_GET.sh](tests/collections_coluuid_GET.sh) failed

[tests/collections_coluuid_POST.sh](tests/collections_coluuid_POST.sh) failed

[tests/collections_coluuid_commit_POST.sh](tests/collections_coluuid_commit_POST.sh) failed

[tests/collections_coluuid_contents_DELETE.sh](tests/collections_coluuid_contents_DELETE.sh) failed

[tests/collections_fs_add_POST.sh](tests/collections_fs_add_POST.sh) failed

[tests/content_add-car_POST.sh](tests/content_add-car_POST.sh) failed

[tests/content_add-ipfs_POST.sh](tests/content_add-ipfs_POST.sh) failed

[tests/content_add_POST.sh](tests/content_add_POST.sh) failed

[tests/content_aggregated_content_GET.sh](tests/content_aggregated_content_GET.sh) failed

[tests/content_all-deals_GET.sh](tests/content_all-deals_GET.sh) failed

[tests/content_bw-usage_content_GET.sh](tests/content_bw-usage_content_GET.sh) failed

[tests/content_create_POST.sh](tests/content_create_POST.sh) failed

[tests/content_id_GET.sh](tests/content_id_GET.sh) failed

[tests/content_importdeal_POST.sh](tests/content_importdeal_POST.sh) failed

[tests/content_read_cont_GET.sh](tests/content_read_cont_GET.sh) failed

[tests/content_status_id_GET.sh](tests/content_status_id_GET.sh) failed

[tests/deal_estimate_POST.sh](tests/deal_estimate_POST.sh) failed

[tests/deal_info_dealid_GET.sh](tests/deal_info_dealid_GET.sh) failed

[tests/deal_proposal_propcid_GET.sh](tests/deal_proposal_propcid_GET.sh) failed

[tests/deal_query_miner_GET.sh](tests/deal_query_miner_GET.sh) failed

[tests/deal_status-by-proposal_propcid_GET.sh](tests/deal_status-by-proposal_propcid_GET.sh) failed

[tests/deal_status_miner_:propcid_GET.sh](tests/deal_status_miner_:propcid_GET.sh) failed

[tests/deal_transfer_in-progress_GET.sh](tests/deal_transfer_in-progress_GET.sh) failed

[tests/deal_transfer_status_POST.sh](tests/deal_transfer_status_POST.sh) failed

[tests/deals_make_miner_POST.sh](tests/deals_make_miner_POST.sh) failed

[tests/deals_status_deal_GET.sh](tests/deals_status_deal_GET.sh) failed

[tests/net_addrs_GET.sh](tests/net_addrs_GET.sh) failed

[tests/pinning_pins_POST.sh](tests/pinning_pins_POST.sh) failed

[tests/pinning_pins_pinid_DELETE.sh](tests/pinning_pins_pinid_DELETE.sh) failed

[tests/pinning_pins_pinid_GET.sh](tests/pinning_pins_pinid_GET.sh) failed

[tests/pinning_pins_pinid_POST.sh](tests/pinning_pins_pinid_POST.sh) failed

[tests/user_api-keys_key_or_hash_DELETE.sh](tests/user_api-keys_key_or_hash_DELETE.sh) failed

Total Successes 32
Total Fails 38
Total Tests 70
