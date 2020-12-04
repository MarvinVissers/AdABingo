<?php
    require("db.php");

    class Functions  {
        private $conn;

        public function __construct() {
            $database = new Database;
            $this->conn = $database->getConnection();
        }

        public function getAccounts() {
            // Array with names to fill later
            $listAccounts = array();

            $query = "SELECT * FROM account";
            $stm = $this->conn->prepare($query);
            if ($stm->execute()) {
                // Getting the results
                $result = $stm->fetchAll(PDO::FETCH_OBJ);

                // Looping through the results
                foreach ($result as $account) {
                    $accountmodel = array("id" => $account->id, "name" => $account->name, "dayscore" => $account->dayscore, "wins" => $account->wins);
                    array_push($listAccounts, $accountmodel);
                }

                return $listAccounts;
            }
        }
    }
?>