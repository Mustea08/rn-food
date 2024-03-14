import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
