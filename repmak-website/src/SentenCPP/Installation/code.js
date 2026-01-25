
export const code = [
`
cmake_minimum_required(VERSION 3.20)
project(my_app LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 20)

include(FetchContent)
FetchContent_Declare(
        sentencpp
        GIT_REPOSITORY https://github.com/Repmak/sentenCPP.git
        GIT_TAG main
)
FetchContent_MakeAvailable(sentencpp)

add_executable(my_app main.cpp)
target_link_libraries(my_app PRIVATE sentencpp)
`,

`
mkdir build && cd build

cmake .. \\
  -DICU_ROOT=/path/to/your/icu4c \\
  -DONNXRUNTIME_ROOT=/path/to/your/onnxruntime-directory

cmake --build .
`,

`pip install "optimum[exporters] optimum[onnxruntime]"`,

`optimum-cli export onnx --model MODEL_NAME --task default sentencpp_model/`,

`
#include <iostream>
#include <sentencpp/tokenizer/WordPiece.h>
#include <sentencpp/inference/OnnxEngine.h>
#include <sentencpp/embedding_utils/VectorMaths.h>

int main() {
    sentencpp::tokenizer::WordPieceConfig config;
    config.config_path = "/path/to/your/tokenizer.json";
    const sentencpp::tokenizer::WordPiece tokenizer(config);

    const std::string sentence_1 = "The cat sits outside";
    const std::string sentence_2 = "A feline is resting outdoors";

    const auto tokens_1 = tokenizer.tokenize(sentence_1);
    const auto tokens_2 = tokenizer.tokenize(sentence_2);

    sentencpp::inference::ModelConfig model_config;
    model_config.model_path = "/path/to/your/model.onnx";
    sentencpp::inference::OnnxEngine engine(model_config);

    std::vector<std::vector<float>> embeddings_1 = engine.encode(tokens_1);
    std::vector<std::vector<float>> embeddings_2 = engine.encode(tokens_2);

    auto vector_1 = sentencpp::embedding_utils::VectorMaths::mean_pooling(embeddings_1, tokens_1);
    auto vector_2 = sentencpp::embedding_utils::VectorMaths::mean_pooling(embeddings_2, tokens_2);

    float similarity = sentencpp::embedding_utils::VectorMaths::cosine_similarity(vector_1, vector_2);
    std::cout << "Similarity Score: " << similarity << std::endl;

    return 0;
}
`,




];
